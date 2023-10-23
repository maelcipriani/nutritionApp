from rest_framework import serializers

from item.models import Item


class ItemSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Item
        fields = '__all__'
