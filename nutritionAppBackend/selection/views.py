from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from selection.models import Selection
from selection.serializers import SelectionSerializer


# Create your views here.
class SelectionViewSet(viewsets.ModelViewSet):
    serializer_class = SelectionSerializer
    queryset = Selection.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        selection = Selection.objects.all().filter(user=user)
        return selection
