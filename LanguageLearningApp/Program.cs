using Microsoft.AspNetCore.Authentication.Cookies;
using LanguageLearningApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add authentication
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Auth/Login";
        options.LogoutPath = "/Auth/Logout";
    });

// Register services
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<TestService>();

// Add session support
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseSession();

// Middleware to set interface language
app.Use(async (context, next) =>
{
    // Get language from cookie or set default
    string uiLanguage = context.Request.Cookies["ui_language"] ?? "English";
    context.Items["CurrentLanguage"] = uiLanguage;
    
    // Set ViewData for layout
    if (context.GetEndpoint()?.Metadata.GetMetadata<ControllerActionDescriptor>() != null)
    {
        context.Items["ViewData_CurrentLanguage"] = uiLanguage;
    }
    
    await next.Invoke();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Initialize test data
using (var scope = app.Services.CreateScope())
{
    var testService = scope.ServiceProvider.GetRequiredService<TestService>();
    testService.InitializeTestData();
}

app.Run();