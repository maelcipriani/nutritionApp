# Generated by Django 4.2.6 on 2023-10-15 21:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0003_alter_item_price'),
        ('recipe', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='calories',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='lipids',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='price',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='proteins',
        ),
        migrations.AddField(
            model_name='recipe',
            name='preparation_time',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recipe',
            name='total_calories',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='total_carbohydrates',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='total_lipids',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='total_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='total_proteins',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.CreateModel(
            name='ItemWithQuantity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='item.item')),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipe.recipe')),
            ],
        ),
        migrations.AddField(
            model_name='recipe',
            name='items',
            field=models.ManyToManyField(through='recipe.ItemWithQuantity', to='item.item'),
        ),
    ]