from rest_framework import viewsets

from recipe.models import Recipe
from recipe.serializers import RecipeSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe  # Adjust the import based on your project structure
from .serializers import RecipeImageUpdateSerializer  # Adjust the import


# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()


@api_view(['PATCH'])
def update_recipe_image(request, pk):
    try:
        recipe = Recipe.objects.get(pk=pk)
    except Recipe.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PATCH':
        serializer = RecipeImageUpdateSerializer(recipe, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
