# Hacklytics: Around The World

## Background

Art, with its potential for significant appreciation, offers financial gains and acts as a hedge against market volatility. Our Hacklytics project aims to democratize art investment by allowing partial ownership of prestigious artworks, thus removing traditional barriers and expanding opportunities for financial growth and cultural appreciation.

## Project Summary

We introduce a platform to invest in fractional shares of artwork. The platform boasts a curated selection of artworks, backed by historical auction pricing and machine learning-driven valuations. Using gradient boosting for valuation and NLP for market trend analysis, we empower users with the necessary tools for informed investment decisions.

## Data Collection

We address the challenge of obtaining historical art pricing data, often kept confidential by auction houses and present behind paywalls. Our solution involves a Kaggle Database with limited features and scraping articles for NLP sentiment analysis to understand market trends.

## Pricing Model Development

Using Catboost, a powerful library for tabular data, we developed a pricing model with feature engineering from art descriptions. This model underwent random search hyperparameter tuning, resulting in a model with limited predictive power due to dataset constraints.

## Sentiment Model Development

We transitioned from TextBlob to NLTK for sentiment analysis to capture nuanced market trends more accurately. This model processes text data with stemming and stop word removal for efficient sentiment estimation.

## Historical Price Visualization

We manually entered historical sales data, adjusting for inflation, and applied polynomial regression forecasting. Our visual style aligns with the Dow Jones index, reinforcing the mindset of art as an investment.

## Future Improvements

Future work includes enhancing our pricing model with access to comprehensive historical data, refining our sentiment analysis, and developing share quantity and pricing strategies for the artworks.

## Contributors

- Blake Law
- Gaurang Kamat
- Reese Jednorozec
- Alexander Yoon

