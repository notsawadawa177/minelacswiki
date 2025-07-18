// .vitepress/themeConfig1.mjs
export const wikiSidebar = {
    themeConfig: {

      sidebar: {
        '/wiki/': [
        {
          text: '',
          items: [
            { text: '🌐 Сайт', link: 'https://minelacs.fun'},
            { text: '❓ Как зайти?', link: '/wiki/how-to-join'},
            {
              text: '📑 Правила',
              link: '/rules/'
            },
            { 
              text: 'MineLacs Ultimate',
              link: '/wiki/minelacs-ultimate'
            },
            {
              text: ' MLauncher',
              link: '/wiki/launcher'
            },
          ]
        },
        { // Категория сезонов
          text: 'Сезон',
          items: [
            { text: '🧑‍🎨 ML Pixel', link: '/wiki/season/ml-pixel'},
            { text: '🥩 Саварубка', link: '/wiki/season/sawarubka'},
            { text: '⌛ Межсезонье', link: '/wiki/season/ml-oneblock'},
          ]
        },
        { // Категория о нас
          text: 'О нас',
          items: [
            { text: 'Команда', link: '/wiki/about-us/team'},
            { text: 'Проект', link: '/wiki/about-us/project'}
          ]
        },
        { // Категория архив
          text: 'Архив',
          collapsed: false,
          items: [
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Dungeons', link: '/wiki/archive/ml-dungeons'},
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Плюс ', link: '/wiki/archive/ml-plus',
              collapsed: true, items: [
                // { text: '🗺️ Веб Карта ', link: 'http://minelacs.online:12345/' },
                { text: '⚙️ Доп Механики', link: '/wiki/archive/ml-plus/additional-mechanics' },
                { text: '🎨 Загрузка Ресурспаков', link: '/wiki/archive/ml-plus/resourcepack-load' },
                { text: '💬 FlectonePulse ', link: '/wiki/archive/ml-plus/flectone-pulse' },
                { text: '🎵 Пластинки ', link: '/wiki/archive/ml-plus/music-discs' },
                { text: '🍷 Brewery', link: '/brewery/ml-plus/alcoholic-drinks'},
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Create & Magic', link: '/wiki/archive/ml-createmagic', 
              collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/ml-createmagic/gallery'},
                { text: '📥 Карта Сервера', link: '/wiki/archive/ml-createmagic/server-map'},
                { text: '📦 Сборка', link: '/wiki/archive/ml-createmagic/modpack'},
                { text: '🎖️ Значки', link: '/wiki/archive/ml-createmagic/nickname-custom'},
                { text: '💬 FlectoneChat', link: '/wiki/archive/ml-createmagic/flectone-chat' },
                { text: '💿 Etched', link: '/wiki/archive/ml-createmagic/etched'},
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Magic', 
              link: '/wiki/archive/ml-magic',
              collapsed: true,
              items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/ml-magic/gallery'},
                { text: '📥 Карта Сервера', link: '/wiki/archive/ml-magic/server-map'},
                { text: '📦 Сборка', link: '/wiki/archive/ml-magic/modpack'},
                { text: '🎨 Arts & Crafts', link: '/wiki/archive/ml-magic/artsncrafts'},
                { text: '💿 Etched', link: '/wiki/archive/ml-magic/etched'},
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Ванила 2', 
              link: '/wiki/archive/ml-vanila-2', 
              collapsed: true,
              items: [
                { text: '⚙️ Доп Механики', link: '/wiki/archive/ml-vanila-2/additional-mechanics' },
                { text: '🎨 Загрузка Ресурспаков', link: '/wiki/archive/ml-vanila-2/resourcepack-load' },
                { text: '✏️ Изображения на мапах', link: '/wiki/archive/ml-vanila-2/images-on-maps' },
                { text: '🎵 Пластинки', link: '/wiki/archive/ml-vanila-2/music-discs' },
                { text: '💬 FlectoneChat', link: '/wiki/archive/ml-vanila-2/flectone-chat' },
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Create 2', link: '/wiki/archive/ml-create-2', collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/ml-create-2/gallery'},
                { text: '📥 Карта Сервера', link: '/wiki/archive/ml-create-2/server-map'},
                { text: '📦 Сборка', link: '/wiki/archive/ml-create-2/modpack'},
                { text: '💬 FlectoneChat', link: '/wiki/archive/ml-create-2/flectone-chat'},
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Ванила', link: '/wiki/archive/ml-vanila', collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/ml-vanila/gallery'},
                { text: '💬 FlectoneChat', link: '/wiki/archive/ml-vanila/flectone-chat'},
                { text: '🎵 Пластинки', link: '/wiki/archive/ml-vanila/music-discs'},
                { text: '🖌️ Мап Арты', link: '/wiki/archive/ml-vanila/map-arts'},
                { text: '🧩 Поделится Ресурспаком', link: '/wiki/archive/ml-vanila/share-resourcepack'},
              ]
            },
            { text: '<iconify-icon icon="solar:archive-bold-duotone" style="margin-right:0.10rem;margin:center;color: #868dcc" ></iconify-icon> ML Create', link: '/wiki/archive/ml-create', collapsed: true, items: [
                { text: '🖼️ Галерея', link: '/wiki/archive/ml-create/gallery'},
                { text: '✨ Хайлайты', link: '/wiki/archive/ml-create/highlights'},
                { text: 'MineMusic Mod', link: '/wiki/archive/ml-create/minemusic-mod'},
              ]
            },
          ]
        },
        { // Категория о PLAY
          text: '🪄 <span style="color: #e381ff;">PLAY</span> EVENT',
          collapsed: true,
          items: [
            {
              text: 'ЧЁ?',
              link: '/wiki/play/che'
            },
            { 
              text: 'PLAY 2023',
              link: '/wiki/play/play23'
            },
            {
              text: 'PLAY 2024',
              link: '/wiki/play/play24'
            }
          ]
        },
      ],
    },
  }
}
    

  