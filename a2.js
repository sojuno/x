#include <bits/stdc++.h>
using namespace std;

int N1, N2;
int L, M, P;
bool conflict[31][31] = {false};
int res = 0;
int a[31];

void input()
{
    cin >> N1 >> N2;
    cin >> L >> M >> P;

    for (int i = 1; i <= P; i++)
    {
        int u, v;
        cin >> u >> v;
        conflict[u][v] = true;
        conflict[v][u] = true;
    }
    return;
}

bool check()
{
    for (int i = 1; i <= N1 + N2; i++)
    {
        for (int j = 1; j <= N1 + N2; j++)
        {
            if (a[i] == 1 && a[j] == 1 && conflict[i][j] == true)
            {
                return false;
            }
        }
    }
    return true;
}

void Try(int k)
{

    if (k <= N1 + N2)
    {
        for (int i = 0; i <= 1; i++)
        {
            a[k] = i;
            Try(k + 1);
        }
    }

    else
    {
        int cnt_sum = 0;
        int cnt1 = 0, cnt2 = 0;

        for (int i = 1; i <= N1; i++)
        {
            cnt1 += a[i];
            cnt_sum += a[i];
        }

        if (cnt1 + 1 > L || cnt1 > M || cnt1 == 0)
        {
            return;
        }

        for (int j = N1 + 1; j <= N1 + N2; j++)
        {
            cnt2 += a[j];
            cnt_sum += a[j];
        }
        if (cnt_sum > L || cnt2 > M || cnt2 == 0)
        {
            return;
        }

        if (check())
        {
            res++;
            return;
        }
    }
}

int main()
{
    input();
    Try(1);
    cout << res;
    return 0;
}
