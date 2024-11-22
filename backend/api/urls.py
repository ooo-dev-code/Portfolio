from django.urls import path, include
from . import views
from django.contrib import admin

urlpatterns = [
    # path("", views.index, name="index"),
    path("notes/", views.NoteListCreate.as_view(), name="note"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete"),
]