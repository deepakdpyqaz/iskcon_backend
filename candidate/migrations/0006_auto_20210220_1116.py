# Generated by Django 3.1.5 on 2021-02-20 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidate', '0005_candidate_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidate',
            name='otp',
        ),
        migrations.AddField(
            model_name='candidate_temp',
            name='authtoken',
            field=models.CharField(default='', max_length=30),
        ),
    ]
