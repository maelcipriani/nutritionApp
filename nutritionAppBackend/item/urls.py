"""
Url mappings for the recipe app.
"""
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'items', views.ItemViewSet)

app_name = 'item'

urlpatterns = [
    path('', include(router.urls)),
]