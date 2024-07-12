#include <bits/stdc++.h>
using namespace std;
struct edge
{
    int x, y, weight;
};
int p[751], s[751];

void initialize(int n)
{
    for (int i = 0; i <= n; i++)
        p[i] = i, s[i] = 1;
}

int find(int x)
{
    if (p[x] == x)
    {
        return x;
    }
    return p[x] = find(p[x]);
}
int Joint(int x, int y)
{
    x = find(x), y = find(y);
    if (x != y)
    {
        if (s[x] > s[y])
            s[x] += s[y], p[y] = x;
        else
            s[y] += s[x], p[x] = y;
        return 1;
    }
    return 0;
}

int main()
{
    int n, m, i, j;

    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int x[750], y[750];

    cin >> n;
    initialize(n);
    for (i = 0; i < n; i++)
    {
        cin >> x[i] >> y[i];
    }

    cin >> m;
    edge *Edge = new edge[m + 1];
    int connect = 0;

    for (i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        // u--; v--;
        connect += Joint(u - 1, v - 1);
    }

    m = 0;

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (find(i) != find(j))
            {
                edge e;
                e.x = i;
                e.y = j;
                e.weight = (x[i] - x[j]) * (x[i] - x[j]) +
                           (y[i] - y[j]) * (y[i] - y[j]);
                Edge[m] = e;
                m++;
            }
        }
    }

    sort(Edge, Edge + m, [](edge &x, edge &y)
         { return x.weight < y.weight; });
    long long ans = 0;
    for (i = 0; i < m; i++)
    {
        if (Joint(Edge[i].x, Edge[i].y))
        {
            ans += Edge[i].weight;
            connect++;
            if (connect == n - 1)
                break;
        }
    }
    cout << ans;

    return 0;
}
