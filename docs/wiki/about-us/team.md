---
lastUpdated: false
aside: false
layout: doc
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
  } from 'vitepress/theme'

  const admins = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/803639665960681502/6381244118e36a468dae42fbb0cf02ee.webp?size=1024',
      name: 'SawaDawa177_',
      title: 'Создатель',
      links: [
        { icon: 'github', link: 'https://github.com/notsawadawa177' },
        { icon: 'discord', link: 'https://discord.com/users/803639665960681502' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/508385398666297383/6f15fdd4d00b3efa48de4dc486753713?size=1024',
      name: 'GreatShow6102',
      title: 'Администратор, Редактор Вики',
      links: [
        { icon: 'github', link: 'https://github.com/VGSS6102/' },
        { icon: 'discord', link: 'https://discord.com/users/508385398666297383' }
      ]
    },
  ]

  const moderators = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/733200455324401676/2633b9f1773259ec330f8b23072340de.webp?size=1024',
      name: 'Nub4ik1',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/733200455324401676' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/791373241549586443/455753fb239e4f6aa7bcd8a6e90a5eed.webp?size=1024',
      name: 'Mr_Frying',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/791373241549586443' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/648913024031129615/a2bdfd26b847fcce1227420419ba9a37.webp?size=1024',
      name: 'Inuki659',
      title: 'Модератор',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/648913024031129615' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/780060596456390706/557bd0ee53cee65160c92cdc7d1af56c.webp?size=1024',
      name: 'qywyx',
      title: 'Хелпер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/780060596456390706' }
      ]
    },
  ]

  const beta_testers = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/1025547812945006592/38eed200572baacacccd35cb4d9c6500.webp?size=1024',
      name: 'Gurman',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/1025547812945006592' }
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/avatars/506820120694358036/304dd99ed01b8141ebade1394d5b8ee6.webp?size=1024',
      name: 'DVD314',
      title: 'Бета-тестер',
      links: [
        { icon: 'discord', link: 'https://discord.com/users/506820120694358036' }
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title> Администрация  </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="admins" />
<br/>
<center>

# Модерация

</center>
<VPTeamMembers size="medium" :members="moderators" />
<br/>
<center>

# Бета-тестеры 
</center>
<VPTeamMembers size="small" :members="beta_testers" />
</VPTeamPage>




