from django.contrib import admin

from selection.models import Selection


# Register your models here.
class SelectionAdmin(admin.ModelAdmin):
    ordering = ['id']


admin.site.register(Selection)
