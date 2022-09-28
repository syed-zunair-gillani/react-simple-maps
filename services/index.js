import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

export async function getAllPost() {
    const query = gql`
    {
        posts {
            slug
            title
          }
    }
    `
}