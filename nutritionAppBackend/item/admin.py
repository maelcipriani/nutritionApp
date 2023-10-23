from django.contrib import admin

from item.models import Item


# Register your models here.
class ItemAdmin(admin.ModelAdmin):
    ordering = ['id']


admin.site.register(Item, ItemAdmin)
