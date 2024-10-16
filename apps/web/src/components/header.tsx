import { LucidePhoneOutgoing, Slash } from 'lucide-react'

import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()
  return (
    <div className="mx-auto mb-2 flex max-w-[1280px] items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <LucidePhoneOutgoing color={'black'} className="size-6 dark:invert" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && <p>Projetos</p>}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" />
        <ProfileButton />
      </div>
    </div>
  )
}
