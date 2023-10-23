from rest_framework import serializers

from recipe.serializers import RecipeSerializer
from .models import Selection, Recipe
from django.contrib.auth.models import User


# ... (other serializers)

class SelectionSerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)
    recipe_ids = serializers.PrimaryKeyRelatedField(
        queryset=Recipe.objects.all(),
        source='recipes',
        many=True,
        write_only=True
    )

    class Meta:
        model = Selection
        fields = ['id', 'recipes', 'created_at', 'recipe_ids']

    def create(self, validated_data):
        print(validated_data, 'test')
        recipe_ids = validated_data.pop('recipes')
        user = self.context['request'].user

        selection, created = Selection.objects.get_or_create(user=user)
        selection.recipes.set(recipe_ids)
        return selection

    def validate(self, data):
        user = self.context['request'].user
        if Selection.objects.filter(user=user).exists() and self.context['request'].method == 'POST':
            raise serializers.ValidationError("This user already has a selection.")
        return data
