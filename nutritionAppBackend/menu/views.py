from django.shortcuts import render
from rest_framework import viewsets

from item.models import Item
from menu.models import Menu
from menu.serializers import MenuSerializer
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

from recipe.models import ItemWithQuantity
from recipe.serializers import ItemWithQuantityReadSerializer


# Create your views here.
class MenuViewSet(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}


@api_view(['GET'])
@permission_classes([])  # Add your permission classes here
def generate_shopping_list(self, menu_id):
    menu = get_object_or_404(Menu, id=menu_id)
    items_with_quantity = ItemWithQuantity.objects.filter(recipe__in=menu.recipes.all())

    grouped_items = {}
    total_price = 0

    for item_with_quantity in items_with_quantity:
        item = item_with_quantity.item
        quantity = item_with_quantity.quantity

        # Considering the item type for price calculation
        if item.type == Item.ItemType.WEIGHT:
            quantity /= 1000  # Since the price is given for 1000
        price = item.price * quantity

        if item.id in grouped_items:
            grouped_items[item.id]['quantity'] += quantity
            grouped_items[item.id]['total_price'] += price
        else:
            grouped_items[item.id] = {
                'item': ItemWithQuantityReadSerializer(item_with_quantity).data,
                'quantity': quantity,
                'total_price': price
            }
        total_price += price

    response_data = {
        'shopping_list': grouped_items.values(),
        'total_price': total_price
    }

    return Response(response_data, status=status.HTTP_200_OK)
