import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'C/C++とアルゴリズム',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        前期ではC/C++プログラミング言語と基本的なアルゴリズムを
        ステップbyステップで学びます。
      </>
    ),
  },
  {
    title: 'Web開発',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        後期ではJava, JavaScript, その他WEB技術を用いて
        WEBサービスやアプリケーションの開発を行います。
      </>
    ),
  },
  {
    title: '実践的なスキル',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        講義を通じて、現場で活きる実践的な
        プログラミングスキルを身につけます。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
