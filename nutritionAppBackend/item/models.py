from django.db import models


# Create your models here.
class Item(models.Model):
    class ItemType(models.TextChoices):
        WEIGHT = "WEIGHT"
        PORTION = "PORTION"

    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=False, null=False)
    price = models.FloatField()
    calories = models.FloatField()
    proteins = models.FloatField()
    lipids = models.FloatField()
    carbohydrates = models.FloatField()
    image = models.ImageField(upload_to="items", blank=True)
    type = models.CharField(max_length=255, choices=ItemType.choices, default=ItemType.WEIGHT)

    objects = models.Manager()

    class Meta:
        ordering = ['created']

    def __str__(self):
        return f"{self.name}"

