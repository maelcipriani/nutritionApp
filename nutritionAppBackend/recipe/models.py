from enum import Enum

from django.db import models

from item.models import Item


# Create your models here.
def convert(item: Item, quantity, value):
    print(item.type, quantity, value)
    if item.type == Item.ItemType.WEIGHT:
        return quantity * value / 100
    if item.type == Item.ItemType.PORTION:
        return quantity * value


def convert_price(item: Item, quantity, value):
    print(item.type, quantity, value)
    if item.type == Item.ItemType.WEIGHT:
        return quantity * value / 1000
    if item.type == Item.ItemType.PORTION:
        return quantity * value


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
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_calories = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_proteins = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_lipids = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_carbohydrates = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.pk is not None:
            self.total_price = sum([convert_price(i.item, i.quantity, i.item.price) for i in self.itemwithquantity_set.all()])
            self.total_calories = sum(
                [convert(i.item, i.quantity, i.item.calories) for i in self.itemwithquantity_set.all()])
            self.total_proteins = sum(
                [convert(i.item, i.quantity, i.item.proteins) for i in self.itemwithquantity_set.all()])
            self.total_lipids = sum(
                [convert(i.item, i.quantity, i.item.lipids) for i in self.itemwithquantity_set.all()])
            self.total_carbohydrates = sum(
                [convert(i.item, i.quantity, i.item.carbohydrates) for i in self.itemwithquantity_set.all()])
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
