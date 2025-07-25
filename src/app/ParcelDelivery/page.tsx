"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Package,
  DollarSign,
  Zap,
  FileText,
  Key,
  CreditCard,
  Stethoscope,
  Truck,
  CheckCircle,
  ArrowRight,
  Timer,
} from "lucide-react"

export default function ParcelDeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black/10 rounded-full text-black text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              Fast & Reliable Delivery Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Parcel Delivery
              <span className="block text-3xl md:text-4xl font-semibold">Prompt & Reliable Service</span>
            </h1>
            <p className="text-xl text-black/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Perth Taxi Services is proud to offer a prompt and reliable delivery service that fulfills its commitments
              and provides a cost-effective way for Perth travelers to meet their local delivery needs.
            </p>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Book Delivery Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Professional Delivery Service</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our professional drivers are given specific instructions to ensure your parcel is delivered efficiently.
              We achieve speed and reliability at a low cost by making effective use of taxi downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">ASAP Delivery</h3>
                <p className="text-gray-700">
                  Take advantage of our ASAP rate for urgent deliveries. Perfect for medical samples, forgotten keys,
                  wallets, passports, or other urgent items.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Cost-Effective</h3>
                <p className="text-gray-700">
                  We provide cost-effective delivery solutions by utilizing taxi downtime, offering competitive rates
                  for all your delivery needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Reliable Service</h3>
                <p className="text-gray-700">
                  Our professional drivers follow specific instructions to ensure your parcel is delivered efficiently
                  and safely to its destination.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">What We Deliver</h3>
              <p className="text-lg text-gray-700">
                From urgent documents to oversized items, we handle all types of deliveries with care and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: "Medical Samples", desc: "Urgent medical specimens and samples" },
                { icon: Key, title: "Forgotten Keys", desc: "Emergency key delivery service" },
                { icon: CreditCard, title: "Wallets & Cards", desc: "Lost wallets and important cards" },
                { icon: FileText, title: "Documents", desc: "Passports, contracts, and urgent papers" },
                { icon: Package, title: "Small Parcels", desc: "General small package delivery" },
                { icon: Truck, title: "Oversized Items", desc: "Large items requiring dedicated transport" },
                { icon: Timer, title: "Time-Sensitive", desc: "Urgent deliveries with tight deadlines" },
                { icon: CheckCircle, title: "Custom Delivery", desc: "Special delivery requirements" },
              ].map((delivery, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-md transition-all duration-300 border border-gray-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                      <delivery.icon className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-bold text-black mb-2">{delivery.title}</h4>
                    <p className="text-gray-600 text-sm">{delivery.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Need Something Delivered Today?</h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            From urgent medical samples to forgotten essentials, we provide fast, reliable delivery service across
            Perth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg font-semibold"
            >
              Book Delivery Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-lg bg-transparent"
            >
              Call: (08) 1234 5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
