from django.contrib import admin
from .models import Recipe, ItemWithQuantity


class ItemWithQuantityInline(admin.TabularInline):
    model = ItemWithQuantity
    extra = 1  # Number of empty forms to display


class RecipeAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ('id', 'name')  # Fields to display in the list view
    search_fields = ['name']  # Fields that can be searched
    inlines = [ItemWithQuantityInline]  # Inline model class for ItemWithQuantity


admin.site.register(Recipe, RecipeAdmin)
admin.site.register(ItemWithQuantity)
