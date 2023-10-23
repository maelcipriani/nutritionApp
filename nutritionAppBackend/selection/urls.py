"""
Url mappings for the recipe app.
"""
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'selections', views.SelectionViewSet)

app_name = 'selection'

urlpatterns = [
    path('', include(router.urls)),
]