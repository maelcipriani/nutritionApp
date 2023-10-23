from django.contrib import admin

from menu.models import Menu
from recipe.models import Recipe


# Register your models here.
class RecipeInline(admin.TabularInline):
    model = Recipe


class MenuAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_display = ('id',)


admin.site.register(Menu, MenuAdmin)
