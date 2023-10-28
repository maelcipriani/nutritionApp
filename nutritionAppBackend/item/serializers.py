from rest_framework import serializers

from item.models import Item


class ItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField('get_image_url', required=False, read_only=True)

    class Meta:
        model = Item
        fields = '__all__'

    def get_image_url(self, obj) -> str:
        if obj.image and hasattr(obj.image, 'url'):
            request = self.context.get('request')
            base_url = request.build_absolute_uri('/')[:-1]  # Remove trailing slash
            return f'{base_url}{obj.image.url}'
        else:
            return ''
