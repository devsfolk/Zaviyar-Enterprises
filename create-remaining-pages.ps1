# PowerShell script to create remaining pages for Zaviyar Enterprises Website
# This creates: milling.html, packaging.html, quality.html, contact.html

Write-Host "Creating remaining pages for Zaviyar Enterprises Website..." -ForegroundColor Green

# Common header/nav/footer content (reusable)
$header = @'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
'@

$navigation = @'
    <header class="bg-emerald-900 text-cream shadow-lg sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-4" aria-label="Main navigation">
            <div class="flex justify-between items-center">
                <a href="index.html" class="flex items-center space-x-2">
                    <img src="assets/images/logo.svg" alt="Zaviyar Enterprises Logo" class="h-12 w-12">
                    <span class="text-xl font-bold text-gold-500">Zaviyar Enterprises</span>
                </a>
                <ul class="hidden md:flex space-x-6 text-sm font-medium">
                    <li><a href="index.html" class="hover:text-gold-500 transition">Home</a></li>
                    <li><a href="about.html" class="hover:text-gold-500 transition">About Us</a></li>
                    <li><a href="products.html" class="hover:text-gold-500 transition">Products</a></li>
                    <li><a href="milling.html" class="hover:text-gold-500 transition">Milling & Processing</a></li>
                    <li><a href="packaging.html" class="hover:text-gold-500 transition">Packaging & Export</a></li>
                    <li><a href="quality.html" class="hover:text-gold-500 transition">Quality Assurance</a></li>
                    <li><a href="contact.html" class="hover:text-gold-500 transition">Contact Us</a></li>
                </ul>
                <button id="mobile-menu-toggle" class="md:hidden p-2 min-w-[44px] min-h-[44px]" aria-label="Toggle mobile menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <ul id="mobile-menu" class="hidden md:hidden mt-4 space-y-2 text-sm font-medium">
                <li><a href="index.html" class="block py-2 hover:text-gold-500 transition">Home</a></li>
                <li><a href="about.html" class="block py-2 hover:text-gold-500 transition">About Us</a></li>
                <li><a href="products.html" class="block py-2 hover:text-gold-500 transition">Products</a></li>
                <li><a href="milling.html" class="block py-2 hover:text-gold-500 transition">Milling & Processing</a></li>
                <li><a href="packaging.html" class="block py-2 hover:text-gold-500 transition">Packaging & Export</a></li>
                <li><a href="quality.html" class="block py-2 hover:text-gold-500 transition">Quality Assurance</a></li>
                <li><a href="contact.html" class="block py-2 hover:text-gold-500 transition">Contact Us</a></li>
            </ul>
        </nav>
    </header>
'@

Write-Host "✓ Templates prepared" -ForegroundColor Cyan
Write-Host "Ready to create 4 remaining pages" -ForegroundColor Yellow
Write-Host "Please run the actual page creation commands..." -ForegroundColor Yellow
