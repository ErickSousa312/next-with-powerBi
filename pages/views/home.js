import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';

import MyCarousel from '@/components/carrosel';

const inter = Inter({ subsets: ['latin'] })

export default function Main() {

  const router = useRouter();
  const pathname = router.pathname;
  const parts = pathname.split('/');
  const nomePagina = parts[parts.length - 1];

  return (
    <div className={styles.container}>
      <main className={styles.mainDiv}>
      <section className={styles.sectionImage}>
        <MyCarousel/>
        </section>
        <section className={styles.section}>
          <article>
            <h2>Idade Antiga</h2>
            A Idade Antiga foi um período da história que começou com o surgimento da escrita (4000 a.C.) e terminou com a queda do Império Romano do Ocidente (476 d.C.). Durante essa época, diversas civilizações surgiram, como os egípcios, gregos e romanos, e deixaram um legado cultural e histórico muito importante para a humanidade.
          </article>
        </section>
        <section className={styles.section}>
          <article>
            <h2>Idade Média</h2>
            A Idade Média foi um período da história que começou com a queda do Império Romano do Ocidente (476 d.C.) e terminou com o início do Renascimento (século XV). Durante essa época, a Europa foi marcada pelo feudalismo, pelas cruzadas e pela peste negra, além do surgimento do cristianismo como religião dominante.
          </article>
        </section>
        <section className={styles.section}>

          <article>
            <h2>Idade Moderna</h2>
            A Idade Moderna foi um período da história que começou com o fim da Idade Média (século XV) e terminou com a Revolução Francesa (1789). Durante essa época, ocorreram importantes eventos históricos, como as Grandes Navegações, a Reforma Protestante e a Revolução Industrial, que transformaram profundamente a sociedade e a economia.
          </article>
        </section>
        <section>
        <br/>
        <br/>
        <iframe 
            title="Report Section" 
            width="820" 
            height="520" 
            src="https://app.powerbi.com/view?r=eyJrIjoiMWE4ZTA0YjYtYWRkMi00OTU4LTkwY2ItZmVhZGJjM2M5NTdmIiwidCI6IjZiNmU0ZTdiLWM5YmQtNDQwMC05NTE1LTcyNWIzZDVmMWY0MyJ9"
            frameborder="0" 
            allowFullScreen="true"
        />
        </section>
        <br/>
        <br/>
        <br/>  
      </main>
      <aside className={styles.sidebar}>
        <section>
          <h2>Minha Barra Lateral</h2>
          <article>Algum conteúdo aqui...</article>
        </section>
      </aside>
    </div>
  );
}
