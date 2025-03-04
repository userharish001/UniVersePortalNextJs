'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  BeakerIcon,
  XMarkIcon,
  AcademicCapIcon, BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon,UserGroupIcon,WrenchScrewdriverIcon,SignalIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const Colleges = [
  { name: 'All Colleges', href: '#', icon: AcademicCapIcon },
  { name: 'Institutes of National Importance (INI)', href: '#', icon: BuildingLibraryIcon },
  { name: 'Central Universites',  href: '#', icon: BuildingOffice2Icon },
  { name: 'State Universites',  href: '#', icon: BuildingOfficeIcon },
  { name: 'Deemed-to-be Universities',  href: '#', icon: ChartPieIcon },
  { name: 'Private Universities', href: '#', icon: UserGroupIcon },
  { name: 'Specialized Institutions', href: '#', icon: WrenchScrewdriverIcon },
  { name: 'Open and Distance Learning Universities',  href: '#', icon: SignalIcon },
  { name: 'Agricultural and Technical Universities', href: '#', icon: BeakerIcon },
]
const Courses = [
  { id: 1, name: "Bachelor of Technology (B.Tech)", href: "/courses/btech", category: "Engineering" },
  { id: 2, name: "Bachelor of Engineering (B.E)", href: "/courses/be", category: "Engineering" },
  { id: 3, name: "Master of Technology (M.Tech)", href: "/courses/mtech", category: "Engineering" },
  { id: 4, name: "Diploma in Engineering", href: "/courses/diploma-eng", category: "Engineering" },

  { id: 5, name: "Bachelor of Science (B.Sc)", href: "/courses/bsc",category: "Science" },
  { id: 6, name: "Master of Science (M.Sc)", href: "/courses/msc", category: "Science" },

  { id: 7, name: "Bachelor of Commerce (B.Com)", href: "/courses/bcom", category: "Commerce" },
  { id: 8, name: "Master of Commerce (M.Com)", href: "/courses/mcom", category: "Commerce" },

  { id: 9, name: "Bachelor of Business Administration (BBA)", href: "/courses/bba", category: "Management" },
  { id: 10, name: "Master of Business Administration (MBA)", href: "/courses/mba", category: "Management" },

  { id: 11, name: "Bachelor of Arts (B.A)", href: "/courses/ba",category: "Arts" },
  { id: 12, name: "Master of Arts (M.A)", href: "/courses/ma",category: "Arts" },

  { id: 13, name: "Bachelor of Computer Applications (BCA)", href: "/courses/bca", category: "Computer Science" },
  { id: 14, name: "Master of Computer Applications (MCA)", href: "/courses/mca", category: "Computer Science" },

  { id: 15, name: "Bachelor of Architecture (B.Arch)", href: "/courses/barch",category: "Architecture" },
  { id: 16, name: "Master of Architecture (M.Arch)", href: "/courses/march",category: "Architecture" },

  { id: 17, name: "Bachelor of Pharmacy (B.Pharm)", href: "/courses/bpharm",category: "Pharmacy" },
  { id: 18, name: "Master of Pharmacy (M.Pharm)", href: "/courses/mpharm",ategory: "Pharmacy" },

  { id: 19, name: "Bachelor of Law (LLB)", href: "/courses/llb",category: "Law" },
  { id: 20, name: "Master of Law (LLM)", href: "/courses/llm",category: "Law" },

  { id: 21, name: "Bachelor of Education (B.Ed)", href: "/courses/bed",category: "Education" },
  { id: 22, name: "Master of Education (M.Ed)", href: "/courses/med", category: "Education" },

  { id: 23, name: "MBBS", href: "/courses/mbbs", category: "Medical" },
  { id: 24, name: "Bachelor of Dental Surgery (BDS)", href: "/courses/bds",category: "Medical" },
  { id: 25, name: "Bachelor of Physiotherapy (BPT)", href: "/courses/bpt", category: "Medical" },
  { id: 26, name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)", href: "/courses/bams",category: "Medical" },
  { id: 27, name: "Bachelor of Homeopathic Medicine and Surgery (BHMS)", href: "/courses/bhms", category: "Medical" },

  { id: 28, name: "Bachelor of Hotel Management (BHM)", href: "/courses/bhm",category: "Hospitality" },
  { id: 29, name: "Diploma in Hotel Management (DHM)", href: "/courses/dhm", category: "Hospitality" },

  { id: 30, name: "Bachelor of Design (B.Des)", href: "/courses/bdes",category: "Design" },
  { id: 31, name: "Master of Design (M.Des)", href: "/courses/mdes", category: "Design" },

  { id: 32, name: "Bachelor of Journalism and Mass Communication (BJMC)", href: "/courses/bjmc",category: "Media" },
  { id: 33, name: "Master of Journalism and Mass Communication (MJMC)", href: "/courses/mjmc", category: "Media" },

  { id: 34, name: "Bachelor of Social Work (BSW)", href: "/courses/bsw", category: "Social Work" },
  { id: 35, name: "Master of Social Work (MSW)", href: "/courses/msw", category: "Social Work" }
];


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-400">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-2  lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              src='/websitelogo.png'
              width={75} height={30}
              className='rounded-lg'
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Colleges
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {Colleges.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900 hover:text-indigo-600">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Courses
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {Courses.map((item) => (
                  <div
                    key={item.key}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900 hover:text-indigo-600">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-red-500">
            Admissions
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            Compare Colleges
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            Reviews
          </Link>
          <Link href="/contact-us" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            Contact Us
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            About Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            Log in <span aria-hidden="true"></span>
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900  hover:text-red-600">
            Dashboard <span aria-hidden="true"></span>
          </Link>

        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Colleges
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...Colleges].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Courses
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Admissions
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Compare Colleges
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Reviews
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  About Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50  hover:text-red-600"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
