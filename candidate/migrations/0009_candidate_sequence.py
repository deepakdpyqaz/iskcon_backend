# Generated by Django 3.1.5 on 2021-02-20 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidate', '0008_auto_20210220_1128'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='sequence',
            field=models.IntegerField(default=0),
        ),
    ]