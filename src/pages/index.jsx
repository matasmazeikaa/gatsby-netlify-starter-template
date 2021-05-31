import { graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';

const IndexPage = ({ data }) => {
	const { heroSection, pageMetadata } = data.content.childMarkdownRemark.frontmatter;

	return (
		<Layout pageMetadata={pageMetadata}>
			<h1>{heroSection.title}</h1>
			<p>{heroSection.description}</p>
		</Layout>
	);
};

export default IndexPage;

export const PageQuery = graphql`
    query IndexPage {
        content: file(name: { eq: "home" }) {
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
