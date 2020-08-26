# Generated by Django 2.2 on 2020-08-21 08:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Supplyer', '0001_initial'),
        ('ProductInfo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BuyInfo',
            fields=[
                ('buyId', models.AutoField(primary_key=True, serialize=False, verbose_name='进货编号')),
                ('buyDate', models.CharField(default='', max_length=20, verbose_name='进货日期')),
                ('price', models.CharField(default='', max_length=20, verbose_name='进货单价')),
                ('count', models.IntegerField(default=0, verbose_name='进货数量')),
                ('personName', models.CharField(default='', max_length=20, verbose_name='负责人')),
                ('productObj', models.ForeignKey(db_column='productObj', on_delete=django.db.models.deletion.PROTECT, to='ProductInfo.ProductInfo', verbose_name='进货产品')),
                ('supplyerObj', models.ForeignKey(db_column='supplyerObj', on_delete=django.db.models.deletion.PROTECT, to='Supplyer.Supplyer', verbose_name='供应商')),
            ],
            options={
                'verbose_name': '产品进货信息',
                'verbose_name_plural': '产品进货信息',
                'db_table': 't_BuyInfo',
            },
        ),
    ]
