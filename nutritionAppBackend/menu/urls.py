"""
Url mappings for the recipe app.
"""
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'menus', views.MenuViewSet)

app_name = 'menu'

urlpatterns = [
    path('', include(router.urls)),
    path('menus/generate_shopping_list/<int:menu_id>/', views.generate_shopping_list, name='generate_shopping_list'),
]