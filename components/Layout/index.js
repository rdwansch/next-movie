import Head from 'next/head';
import PropTypes from 'prop-types';
import Appbar from '../Appbar';

/**
 *
 * @param {ChildNode} children
 * @param {string} title
 * @returns JSX.Element
 */

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Next Movie | {title}</title>
      </Head>
      {/* Appbar */}
      <Appbar />
      <div>{children}</div>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};
