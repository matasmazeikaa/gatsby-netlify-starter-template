import { graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';

const AboutPage = ({ data }) => {
	const { heroSection, pageMetadata } = data.content.childMarkdownRemark.frontmatter;

	return (
		<Layout pageMetadata={pageMetadata}>
			<h1>{heroSection.title}</h1>
			<p>{heroSection.description}</p>
		</Layout>
	);
};

export default AboutPage;

export const PageQuery = graphql`
    query {
        content: file(name: { eq: "about" }) {
            childMarkdownRemark {
                frontmatter {
                    pageMetadata {
                        title
                        description
                    }
                    heroSection {
                        title
                        description
                    }
                }
            }
        }
    }
`;
