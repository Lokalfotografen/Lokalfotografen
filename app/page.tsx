import Image from "next/image"
import { Camera, Plane, Scan, Palette, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black py-3 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="Lokalfotografen logo" width={120} height={40} className="h-10 w-auto" />
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-white hover:underline font-medium">
              Hjem
            </a>
            <a href="#" className="text-white hover:underline font-medium">
              Galleri
            </a>
            <a href="#" className="text-white hover:underline font-medium">
              Tjenester
            </a>
            <a href="#" className="text-white hover:underline font-medium">
              Kontakt
            </a>
          </div>
          <Button variant="outline" className="md:hidden text-white border-white bg-transparent">
            Meny
          </Button>
        </div>
      </nav>

      {/* Header */}
      <header className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <Image src="/headerimage.jpg" alt="Norwegian waterfront city" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lokalfotog kukrafen</h1>
          <p className="text-xl md:text-2xl">Eiendomsfoto med blikk for detaljer</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Våre tjenester</h2>

          {/* Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            <div className="text-center">
              <Camera className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">Boligfoto</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vi tar oss god tid hos kunden, leverer høy kvalitet og fornøydgaranti.
              </p>
            </div>
            <div className="text-center">
              <Plane className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">Dronefoto</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Registrert med RO3 hos Luftfartstilsynet med fritak for sikkerhetsavstander.
              </p>
            </div>
            <div className="text-center">
              <Scan className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">3D Skanning</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vi har det beste pro-kameraet fra Matterport for 3D skanning.
              </p>
            </div>
            <div className="text-center">
              <Palette className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">3D visualisering</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vi leverer 2D, 3D og visualiseringer til svært konkurransedyktige priser.
              </p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold mb-2">Bedrift</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Vi fokuserer på kvalitet og kreativitet. Våre fotografer jobber hardt for å produsere kvalitet.
              </p>
            </div>
          </div>

          {/* Service Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Boligfoto"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end">
                <div className="p-6 text-center w-full">
                  <h3 className="text-xl font-bold mb-3">Boligfoto</h3>
                  <Button variant="secondary" size="sm">
                    se mer
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Dronefoto"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end">
                <div className="p-6 text-center w-full">
                  <h3 className="text-xl font-bold mb-3">Dronefoto</h3>
                  <Button variant="secondary" size="sm">
                    se mer
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="3D Visualisering"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end">
                <div className="p-6 text-center w-full">
                  <h3 className="text-xl font-bold mb-3">3D Visualisering</h3>
                  <Button variant="secondary" size="sm">
                    se mer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Lokal fotograf for eiendom, bolig og interiør – rask levering og høy kvalitet. Vi hjelper deg å vise
            eiendommen fra sin beste side.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <div className="space-y-4 text-lg font-semibold">
              <div className="flex items-center justify-center gap-3">
                <span>📧</span>
                <a href="mailto:post@lokalfotografen.no" className="text-gray-900 hover:underline">
                  post@lokalfotografen.no
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span>📞</span>
                <a href="tel:+4799999999" className="text-gray-900 hover:underline">
                  999 99 999
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        © 2025 Lokalfotografen – Alle rettigheter reservert
      </footer>
    </div>
  )
}
