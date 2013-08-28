from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'dashboard.views.home'),
    url(r'^sevenk$', 'dashboard.views.sevenk'),
    url(r'^events/', include('events.urls')),
    url(r'^nextbus/', include('nextbus.urls')),
    url(r'^news/', include('news.urls')),
    url(r'^weather/', include('weather.urls')),
    url(r'^laundry/', include('laundry.urls')),
    url(r'^dining/', include('dining.urls')),
    url(r'^package_list/', include('package_list.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
