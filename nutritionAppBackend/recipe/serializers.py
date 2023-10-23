import json

from rest_framework import serializers

from item.serializers import ItemSerializer
from .models import Item, Recipe, ItemWithQuantity


# This serializer is for writing items with quantity
class ItemWithQuantityWriteSerializer(serializers.ModelSerializer):
    item_id = serializers.IntegerField()

    class Meta:
        model = ItemWithQuantity
        fields = ['item_id', 'quantity']


# This serializer is for reading items with quantity
class ItemWithQuantityReadSerializer(serializers.ModelSerializer):
    item = ItemSerializer()

    class Meta:
        model = ItemWithQuantity
        fields = ['item', 'quantity']


class RecipeImageUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['image']


class RecipeSerializer(serializers.ModelSerializer):
    items_with_quantity = serializers.ListField(
        child=ItemWithQuantityWriteSerializer(),
        write_only=True
    )
    items = ItemWithQuantityReadSerializer(source='itemwithquantity_set', many=True, read_only=True)
    image = serializers.SerializerMethodField('get_image_url', required=False)

    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = (
            'total_price', 'total_calories', 'total_proteins', 'total_lipids', 'total_carbohydrates')
        write_only_fields = ('items_with_quantity',)

    def get_image_url(self, obj) -> str:
        if obj.image and hasattr(obj.image, 'url'):
            print(obj.image.url)
            return f'http://127.0.0.1:8000{obj.image.url}'
        else:
            return ''

    def create(self, validated_data):
        print(validated_data)
        items_data = validated_data.pop('items_with_quantity')
        recipe = Recipe.objects.create(**validated_data)

        for item_data in items_data:
            item = Item.objects.get(id=item_data['item_id'])
            ItemWithQuantity.objects.create(recipe=recipe, item=item, quantity=item_data['quantity'])

        recipe.save()
        return recipe

    def update(self, instance, validated_data):
        items_data = json.loads(validated_data.pop('items_with_quantity', '[]'))
        instance.name = validated_data.get('name', instance.name)

        # Update image if it is present in validated_data
        image = validated_data.pop('image', None)
        if image:
            instance.image = image

        ItemWithQuantity.objects.filter(recipe=instance).delete()

        for item_data in items_data:
            item = Item.objects.get(id=item_data['item_id'])
            ItemWithQuantity.objects.create(recipe=instance, item=item, quantity=item_data['quantity'])

        instance.save()
        return instance

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['recipe_type'] = instance.recipe_type  # ensure recipe_type is serialized to its display value
        return rep
