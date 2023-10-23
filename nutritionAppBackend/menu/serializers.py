from random import choices, sample  # import choices instead of sample

from rest_framework import serializers

from menu.models import Menu
from recipe.models import RecipeType, Recipe
from recipe.serializers import RecipeSerializer
from selection.models import Selection


# ... (other imports and serializers)

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'created_at']

    def create(self, validated_data):
        user = self.context['request'].user

        # Get numbers of each type of recipes the user wants in the menu
        num_breakfast = self.context['request'].data.get('breakfasts_count', 0)
        num_meal = self.context['request'].data.get('meals_count', 0)
        num_collation = self.context['request'].data.get('collations_count', 0)

        # Get the user's selection of recipes
        selection = Selection.objects.get(user=user)
        selected_recipes = selection.recipes.all()

        # Separate the recipes by type
        breakfast_recipes = list(selected_recipes.filter(recipe_type=RecipeType.BREAKFAST))
        meal_recipes = list(selected_recipes.filter(recipe_type=RecipeType.MEAL))
        collation_recipes = list(selected_recipes.filter(recipe_type=RecipeType.COLLATION))

        print(breakfast_recipes)
        # If there are not enough unique recipes of a given type, allow repetition
        menu_breakfasts = sample(breakfast_recipes, k=min(num_breakfast, len(breakfast_recipes))) if len(
            breakfast_recipes) > 0 else []
        menu_meals = sample(meal_recipes, k=min(num_meal, len(meal_recipes))) if len(meal_recipes) > 0 else []
        menu_collations = sample(collation_recipes, k=min(num_collation, len(collation_recipes))) if len(
            collation_recipes) > 0 else []

        print(menu_breakfasts, menu_collations, menu_meals)

        # Create the new menu and add the selected recipes to it
        menu = Menu.objects.create(user=user)
        menu.recipes.set(menu_breakfasts + menu_meals + menu_collations)
        return menu

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        recipes = instance.recipes.all()
        serialized_recipes = RecipeSerializer(recipes, many=True).data

        # Structuring recipes by recipe_type
        rep['breakfasts'] = [recipe for recipe in serialized_recipes if
                             recipe['recipe_type'] == RecipeType.BREAKFAST.value]
        rep['meals'] = [recipe for recipe in serialized_recipes if recipe['recipe_type'] == RecipeType.MEAL.value]
        rep['collations'] = [recipe for recipe in serialized_recipes if
                             recipe['recipe_type'] == RecipeType.COLLATION.value]

        return rep
