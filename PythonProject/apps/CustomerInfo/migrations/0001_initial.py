# Generated by Django 2.2 on 2020-08-21 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerInfo',
            fields=[
                ('customerId', models.AutoField(primary_key=True, serialize=False, verbose_name='客户编号')),
                ('customerName', models.CharField(default='', max_length=20, verbose_name='客户名称')),
                ('personName', models.CharField(default='', max_length=20, verbose_name='联系人')),
                ('telephone', models.CharField(default='', max_length=20, verbose_name='联系电话')),
                ('address', models.CharField(default='', max_length=20, verbose_name='联系地址')),
            ],
            options={
                'verbose_name': '客户信息信息',
                'verbose_name_plural': '客户信息信息',
                'db_table': 't_CustomerInfo',
            },
        ),
    ]
