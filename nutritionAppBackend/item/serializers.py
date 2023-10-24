from rest_framework import serializers

from item.models import Item


class ItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url', required=False, read_only=True)

    class Meta:
        model = Item
        fields = '__all__'

    def get_image_url(self, obj) -> str:
        if obj.image and hasattr(obj.image, 'url'):
            print(obj.image.url)
            return f'http://127.0.0.1:8000{obj.image.url}'
        else:
            return ''
