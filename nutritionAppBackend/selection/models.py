from django.contrib.auth.models import User
from django.db import models

from recipe.models import Recipe


# ... (other models)

class Selection(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    recipes = models.ManyToManyField(Recipe)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = models.Manager()

    def __str__(self):
        return f"Selection for {self.user.username}"
