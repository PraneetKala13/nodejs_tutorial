from flask import Flask, render_template, request
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', whiskeys=df['NAME'].values, recommendations={})

@app.route('/sims/<brand>')
def sims(brand):
    if brand in df['NAME'].values:
        results = get_sim_scotch(brand)
    else:
        results = {"Something":" went wrong in the sims method"}
    return render_template('index.html', whiskeys=df['NAME'].values, recommendations=results)

## Break this out to a separate file...
# set up dataframe (as opposed to having a database...)
df = pd.read_csv('scotch.csv', sep=';')

# create cosine similarity model
distances = cosine_similarity(df[df.columns[1:]])
simdf = pd.DataFrame(data=distances,columns=df['NAME'],index=df.index)

def get_sim_scotch(name):
    # pick out the top 5 most similar scotches (exlude the first one, which is the scotch itself)
    sim_scores = simdf[name].sort_values(ascending=False)[1:6]
    recommendations = {df['NAME'][i]: round(score, 2) for i, score in sim_scores.items()}
    return recommendations


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5123)