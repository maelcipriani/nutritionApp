from enum import Enum

from django.db import models

from item.models import Item


# Create your models here.
def convert(item: Item, quantity, value):
    print(item.type, quantity, value)
    if item.type == Item.ItemType.WEIGHT:
        return round(quantity * value / 100, 2)
    if item.type == Item.ItemType.PORTION:
        return round(quantity * value, 2)


def convert_price(item: Item, quantity, value):
    print(item.type, quantity, value)
    if item.type == Item.ItemType.WEIGHT:
        return round(quantity * value / 1000, 2)
    if item.type == Item.ItemType.PORTION:
        return round(quantity * value, 2)


class RecipeType(models.TextChoices):
    BREAKFAST = "Breakfast"
    MEAL = "Meal"
    COLLATION = "Collation"


class Recipe(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=False, null=False)
    items = models.ManyToManyField(Item, through='ItemWithQuantity')
    image = models.FileField()
    recipe_type = models.CharField(
        max_length=50,
        choices=RecipeType.choices,
        default=RecipeType.MEAL
    )
    preparation_time = models.IntegerField(null=True)
    total_price = models.FloatField(null=True, blank=True)
    total_calories = models.FloatField(null=True, blank=True)
    total_proteins = models.FloatField(null=True, blank=True)
    total_lipids = models.FloatField(null=True, blank=True)
    total_carbohydrates = models.FloatField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.pk is not None:
            self.total_price = round(sum([convert_price(i.item, i.quantity, i.item.price) for i in self.itemwithquantity_set.all()]), 2)
            self.total_calories = round(sum(
                [convert(i.item, i.quantity, i.item.calories) for i in self.itemwithquantity_set.all()]), 2)
            self.total_proteins = round(sum(
                [convert(i.item, i.quantity, i.item.proteins) for i in self.itemwithquantity_set.all()]), 2)
            self.total_lipids = round(sum(
                [convert(i.item, i.quantity, i.item.lipids) for i in self.itemwithquantity_set.all()]), 2)
            self.total_carbohydrates = round(sum(
                [convert(i.item, i.quantity, i.item.carbohydrates) for i in self.itemwithquantity_set.all()]), 2)
        super().save(*args, **kwargs)

    objects = models.Manager()

    def __str__(self):
        return self.name


class ItemWithQuantity(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.quantity} {self.item} in {self.recipe.name}"
