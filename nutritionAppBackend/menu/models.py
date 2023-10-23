from django.db import models
from django.contrib.auth.models import User

from recipe.models import Recipe


# ... (other models)

class Menu(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipes = models.ManyToManyField(Recipe)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = models.Manager()

    def __str__(self):
        return f"Menu for {self.user.username} created at {self.created_at}"
