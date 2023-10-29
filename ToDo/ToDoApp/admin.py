from django.contrib import admin
from .models import ToDoItem


class AdminToDoItem(admin.ModelAdmin):
    list_display = ('ToDoItem_title', 'ToDoItem_desc')

admin.site.register(ToDoItem, AdminToDoItem)
