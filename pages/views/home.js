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
            <h2>Violência contra mulheres</h2>
                A violência contra mulheres e meninas inclui situações de agressão física, sexual,
                psicológica e econômica. As duas formas mais comuns de violência contra a mulher, cujos
                autores são parceiros íntimos da vítima, são: a agressão física, que se caracteriza
                comumente pelos crimes de lesão corporal e ameaça, também chamada violência doméstica;
                e a coerção ao sexo, chamada de violência sexual, que inclui com mais frequência os crimes
                de estupro e atentado violento ao pudor. A violência sexual poder ser exercida no espaço
                doméstico (casa) ou no público (rua). A agressão física é quase sempre acompanhada de
                agressão psicológica e, de um quarto à metade das vezes, está relacionada a situações de
                violência sexual, como, por exemplo, o estupro conjugal (SOUZA; ADESSE, 2005, p. 37)
          </article>
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
          <h2>Barra Lateral</h2>
          <article>Ainda não temos conteudo aqui...</article>
        </section>
      </aside>
    </div>
  );
}
