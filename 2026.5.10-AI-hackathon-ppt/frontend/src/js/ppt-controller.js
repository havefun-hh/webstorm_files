
export class PPTController {
    constructor() {
        this.currentIndex = 0
        this.slides = []
        this.totalSlides = 0
        this.isFullscreen = false

        this.container = document.querySelector('.ppt-container')
        this.viewport = document.getElementById('ppt-viewport')
        this.prevBtn = document.getElementById('prevBtn')
        this.nextBtn = document.getElementById('nextBtn')
        this.progressBarFill = document.getElementById('progressBarFill')
        this.pageIndicator = document.getElementById('pageIndicator')
        this.fullscreenBtn = document.getElementById('fullscreenBtn')
        this.sidebar = document.getElementById('slideSidebar')

        this.init()
        this.initWindowMessage();
    }

    init() {
        this.loadSlides()
        this.generateThumbnails()
        this.bindEvents()
        this.initializePage()
        this.updateUI()
        this.applyEditMode()  // 初始化时应用编辑模式的显隐状态
        this.updateViewportScale()
        this.updateThumbnailScale()
    }

    // 应用当前模式的 UI 显隐状态（非全屏 = 编辑模式）
    applyEditMode() {
        // 编辑模式下隐藏导航箭头和页码
        this.prevBtn.style.display = 'none'
        this.nextBtn.style.display = 'none'
        this.pageIndicator.style.display = 'none'
        // 编辑模式下显示全屏按钮和侧栏
        this.fullscreenBtn.style.display = 'flex'
        this.sidebar.style.display = 'flex'
    }

    initWindowMessage() {
        // 监听来自外部的 postMessage
        window.addEventListener('message', (event) => {
            // 过滤掉一些非相关的消息
            if (!event.data || typeof event.data !== 'object') {
                return;
            }
            const { type, data } = event.data;
            if (type === 'childrenstart') {
                // 进入dom编辑，隐藏这些按钮
                this.prevBtn.style.visibility = 'hidden'
                this.nextBtn.style.visibility = 'hidden'
                this.progressBarFill.style.visibility = 'hidden'
                this.pageIndicator.style.visibility = 'hidden'
                this.fullscreenBtn.style.visibility = 'hidden'
                this.sidebar.style.visibility = 'hidden'
            } else if (type === 'childrenstop') {
                // 退出dom编辑，恢复显示
                this.prevBtn.style.visibility = 'visible'
                this.nextBtn.style.visibility = 'visible'
                this.progressBarFill.style.visibility = 'visible'
                this.pageIndicator.style.visibility = 'visible'
                this.fullscreenBtn.style.visibility = 'visible'
                this.sidebar.style.visibility = 'visible'
            }
        });
    }
    
    initializePage() {
        // 从 URL 获取 page 参数
        const urlParams = new URLSearchParams(window.location.search)
        let pageParam = urlParams.get('page')
        
        // 如果没有 page 参数，默认设置为 1
        if (!pageParam) {
            pageParam = '1'
            urlParams.set('page', '1')
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`
            window.history.replaceState({}, '', newUrl)
        }
        
        const pageNum = parseInt(pageParam, 10)
        // 转换为索引（page 从 1 开始，index 从 0 开始）
        const targetIndex = pageNum - 1
        
        // 验证页码有效性
        if (!isNaN(pageNum) && targetIndex >= 0 && targetIndex < this.totalSlides) {
            // 移除默认的第一页激活状态
            if (this.slides[0]) {
                this.slides[0].classList.remove('active')
            }
            
            // 设置目标页为激活状态
            this.currentIndex = targetIndex
            if (this.slides[targetIndex]) {
                this.slides[targetIndex].classList.add('active')
            }
        } else {
            console.warn(`无效的页码参数: ${pageParam}，将显示第 1 页`)
            // 无效页码时也更新 URL 为 page=1
            urlParams.set('page', '1')
            const newUrl = `${window.location.pathname}?${urlParams.toString()}`
            window.history.replaceState({}, '', newUrl)
        }
    }
    
    loadSlides() {
        if (typeof window.slideDataMap === 'undefined') {
            console.error('未找到 slideDataMap')
            return
        }
        
        // 获取所有页码并排序
        const pageNumbers = Array.from(window.slideDataMap.keys()).sort((a, b) => a - b)
        this.totalSlides = pageNumbers.length
        
        // 如果没有幻灯片，直接返回
        if (this.totalSlides === 0) {
            console.warn('slideDataMap 为空，没有幻灯片可加载')
            return
        }
        
        // 插入每一页
        pageNumbers.forEach((pageNum, idx) => {
            const slideDiv = document.createElement('div')
            slideDiv.className = 'slide'
            // 默认第一页激活（如果没有 URL 参数会使用这个）
            if (idx === 0) slideDiv.classList.add('active')
            
            // 解析 HTML 字符串
            const htmlContent = window.slideDataMap.get(pageNum)
            if (!htmlContent || typeof htmlContent !== 'string') {
                this.totalSlides--;
                console.error(`未找到页码 ${pageNum} 的内容, 或者页码 ${pageNum} 的内容为空`)
                return;
            }
            const contentEl = document.createElement('div')
            contentEl.innerHTML = htmlContent.trim()
            slideDiv.appendChild(contentEl)
            this.viewport.appendChild(slideDiv)
            this.slides.push(slideDiv)
            // 执行 innerHTML 中插入的 script 标签（浏览器不会自动执行 innerHTML 中的脚本）
            contentEl.querySelectorAll('script').forEach(oldScript => {
                const newScript = document.createElement('script')
                newScript.textContent = oldScript.textContent
                oldScript.parentNode.replaceChild(newScript, oldScript)
            })
        })
    }
    
    bindEvents() {
        // 按钮点击
        this.prevBtn.addEventListener('click', () => this.prevSlide())
        this.nextBtn.addEventListener('click', () => this.nextSlide())

        // 全屏切换
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen())

        // 全屏状态变化监听
        document.addEventListener('fullscreenchange', () => this.onFullscreenChange())
        document.addEventListener('webkitfullscreenchange', () => this.onFullscreenChange())

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide()
            } else if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault()
                this.nextSlide()
            } else if (e.key === 'Home') {
                this.goToSlide(0)
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1)
            } else if (e.key === 'Escape' && this.isFullscreen) {
                // Esc 退出全屏由浏览器自动处理，这里只做状态清理
            } else if (e.key === 'f' || e.key === 'F') {
                this.toggleFullscreen()
            }
        })

        // 触摸滑动（移动端）
        let touchStartX = 0
        this.viewport.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX
        })

        this.viewport.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX
            const diff = touchStartX - touchEndX

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide()
                } else {
                    this.prevSlide()
                }
            }
        })

        // 窗口缩放时更新视口缩放和缩略图缩放
        window.addEventListener('resize', () => {
            this.updateViewportScale()
            this.updateThumbnailScale()
        })
    }
    
    prevSlide() {
        if (this.currentIndex > 0) {
            this.goToSlide(this.currentIndex - 1)
        }
    }
    
    nextSlide() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.goToSlide(this.currentIndex + 1)
        }
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return
        
        // 移除当前激活状态
        this.slides[this.currentIndex].classList.remove('active')
        
        // 设置新的激活状态
        this.currentIndex = index
        this.slides[this.currentIndex].classList.add('active')
        
        // 更新 URL 参数
        this.updateUrlPage(index + 1)
        
        this.updateUI()
    }
    
    updateUrlPage(pageNum) {
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.set('page', pageNum.toString())
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`
        window.history.replaceState({}, '', newUrl)
    }
    
    updateUI() {
        // 如果没有幻灯片，显示生成中状态
        if (this.totalSlides === 0) {
            this.prevBtn.disabled = true
            this.nextBtn.disabled = true
            this.progressBarFill.style.width = '0%'
            this.pageIndicator.textContent = '制作中'
            return
        }

        // 更新按钮状态
        this.prevBtn.disabled = this.currentIndex === 0
        this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1

        // 更新进度条
        const progress = ((this.currentIndex + 1) / this.totalSlides) * 100
        this.progressBarFill.style.width = `${progress}%`

        // 更新页码指示器
        this.pageIndicator.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`

        // 更新缩略图选中态
        this.sidebar.querySelectorAll('.thumb-item').forEach((item, idx) => {
            item.classList.toggle('active', idx === this.currentIndex)
        })
    }
    
    updateViewportScale() {
        // 基准尺寸：1440x810 (16:9)
        const baseWidth = 1440
        const baseHeight = 810

        // 编辑模式下减去侧栏宽度
        const sidebarWidth = this.isFullscreen ? 0 : 180
        const availWidth = window.innerWidth - sidebarWidth
        const availHeight = window.innerHeight

        // 计算缩放比例（铺满可用区域，取宽高中较小值保持比例）
        const scaleX = availWidth / baseWidth
        const scaleY = availHeight / baseHeight
        const scale = Math.min(scaleX, scaleY)

        // 应用缩放
        this.viewport.style.transform = `scale(${scale})`

        if (!this.isFullscreen) {
            // 编辑模式下，viewport 的视觉渲染需要居中在 sidebar 右侧可用区域内
            // transform-origin: center center，视觉中心 = marginLeft + baseWidth / 2
            // 视觉左边缘 = marginLeft + baseWidth/2 - (baseWidth*scale)/2
            //            = marginLeft + (baseWidth/2) * (1 - scale)
            // 视觉右边缘 = 视觉左边缘 + baseWidth * scale
            // 要求视觉左边缘 >= sidebarWidth
            const visualWidth = baseWidth * scale
            // 可用区域居中时的 marginLeft：使视觉中心 = sidebarWidth + availWidth / 2
            const areaCenter = sidebarWidth + availWidth / 2
            const idealMargin = areaCenter - baseWidth / 2

            // 视觉左边缘
            const visualLeft = idealMargin + (baseWidth - visualWidth) / 2

            // 如果视觉左边缘 < sidebarWidth，向右推
            if (visualLeft < sidebarWidth) {
                const push = sidebarWidth - visualLeft
                this.viewport.style.marginLeft = `${idealMargin + push}px`
            } else {
                this.viewport.style.marginLeft = `${idealMargin}px`
            }
        } else {
            this.viewport.style.marginLeft = '0px'
        }
    }

    // ========== 缩略图相关 ==========

    generateThumbnails() {
        if (typeof window.slideDataMap === 'undefined') return

        const pageNumbers = Array.from(window.slideDataMap.keys()).sort((a, b) => a - b)
        this.sidebar.innerHTML = ''

        pageNumbers.forEach((pageNum, idx) => {
            const htmlContent = window.slideDataMap.get(pageNum)
            if (!htmlContent || typeof htmlContent !== 'string') return

            const thumbItem = document.createElement('div')
            thumbItem.className = 'thumb-item'
            if (idx === 0) thumbItem.classList.add('active')
            thumbItem.dataset.index = idx

            // 缩略图内容（只渲染 HTML，不执行脚本）
            // 关键：将所有 id 替换为 thumb- 前缀，避免与主 viewport 中的 slide id 冲突
            let thumbHtml = htmlContent.trim()
            thumbHtml = thumbHtml.replace(/\bid="([^"]+)"/g, 'id="thumb-$1"')

            const thumbContent = document.createElement('div')
            thumbContent.className = 'thumb-content'
            thumbContent.innerHTML = thumbHtml
            thumbItem.appendChild(thumbContent)

            // 页码标签
            const thumbNumber = document.createElement('div')
            thumbNumber.className = 'thumb-number'
            thumbNumber.textContent = pageNum
            thumbItem.appendChild(thumbNumber)

            // 点击跳转
            thumbItem.addEventListener('click', () => this.goToSlide(idx))

            this.sidebar.appendChild(thumbItem)
        })
    }

    updateThumbnailScale() {
        // 缩略图容器宽度（侧栏 180px - padding 20px = 160px 可用）
        const sidebarPadding = 20 // 左右各 10px
        const availableWidth = 160 - 4 // 减去 2px border
        const scale = availableWidth / 1440

        this.sidebar.querySelectorAll('.thumb-content').forEach(el => {
            el.style.transform = `scale(${scale})`
        })
    }

    // ========== 全屏相关 ==========

    toggleFullscreen() {
        if (this.isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            }
        } else {
            const el = this.container
            if (el.requestFullscreen) {
                el.requestFullscreen()
            } else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen()
            }
        }
    }

    onFullscreenChange() {
        const fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement
        this.isFullscreen = !!fullscreenEl

        // 切换布局 class
        this.container.classList.toggle('edit-mode', !this.isFullscreen)
        this.container.classList.toggle('fullscreen-mode', this.isFullscreen)

        // 切换按钮图标状态
        this.fullscreenBtn.classList.toggle('is-fullscreen', this.isFullscreen)
        this.fullscreenBtn.setAttribute('aria-label', this.isFullscreen ? '退出全屏' : '全屏演示')

        // 用 JS 直接控制导航按钮和页码的显隐
        // 全屏模式：显示箭头和页码，显示全屏按钮
        // 编辑模式：隐藏箭头和页码，显示全屏按钮和侧栏
        this.prevBtn.style.display = this.isFullscreen ? '' : 'none'
        this.nextBtn.style.display = this.isFullscreen ? '' : 'none'
        this.pageIndicator.style.display = this.isFullscreen ? '' : 'none'
        this.fullscreenBtn.style.display = 'flex'
        this.sidebar.style.display = this.isFullscreen ? 'none' : 'flex'

        // 重新计算视口缩放
        this.updateViewportScale()
    }
}
