import { LucidePhoneOutgoing, Slash } from 'lucide-react'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1280px] items-center justify-between">
      <div className="flex items-center gap-3">
        <LucidePhoneOutgoing color={'black'} className="size-6 dark:invert" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
