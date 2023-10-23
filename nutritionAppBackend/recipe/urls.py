"""
Url mappings for the recipe app.
"""
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import views
from .views import update_recipe_image

router = DefaultRouter()
router.register(r'recipes', views.RecipeViewSet)

app_name = 'recipe'

urlpatterns = [
    path('', include(router.urls)),
    path('recipes/<int:pk>/update-image/', update_recipe_image, name='update-recipe-image')
]