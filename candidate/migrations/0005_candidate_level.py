# Generated by Django 3.1.5 on 2021-02-20 04:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0001_initial'),
        ('candidate', '0004_loggedin'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='level',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manager.level'),
        ),
    ]
