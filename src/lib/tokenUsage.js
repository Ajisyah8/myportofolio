export const DEFAULT_CONTEXT_WINDOW = 128000;

function clampPercentage(value) {
    return Math.max(0, Math.min(100, value));
}

export function calculateTokenUsage(usage, contextWindow = DEFAULT_CONTEXT_WINDOW) {
    const promptTokens = Number(usage?.prompt_tokens ?? 0);
    const completionTokens = Number(usage?.completion_tokens ?? 0);
    const totalTokens =
        Number(usage?.total_tokens ?? promptTokens + completionTokens);

    if (!Number.isFinite(contextWindow) || contextWindow <= 0) {
        throw new Error("contextWindow must be a positive number.");
    }

    const usedPercentage = clampPercentage((totalTokens / contextWindow) * 100);
    const remainingTokens = Math.max(contextWindow - totalTokens, 0);
    const remainingPercentage = clampPercentage(100 - usedPercentage);

    return {
        contextWindow,
        promptTokens,
        completionTokens,
        totalTokens,
        remainingTokens,
        usedPercentage: Number(usedPercentage.toFixed(2)),
        remainingPercentage: Number(remainingPercentage.toFixed(2)),
    };
}

export function formatTokenUsage(usage, contextWindow = DEFAULT_CONTEXT_WINDOW) {
    const result = calculateTokenUsage(usage, contextWindow);

    return `Used ${result.totalTokens.toLocaleString()} of ${result.contextWindow.toLocaleString()} tokens (${result.usedPercentage}%). Remaining ${result.remainingTokens.toLocaleString()} tokens (${result.remainingPercentage}%).`;
}
