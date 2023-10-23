from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

from item.models import Item
from item.serializers import ItemSerializer


# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    # def get_permissions(self):
    #     if self.action == 'create':
    #         permission_classes = [IsAuthenticated]
    #     else:
    #         permission_classes = [AllowAny]
    #     return [permission() for permission in permission_classes]
